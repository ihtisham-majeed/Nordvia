"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  getQuoteItems,
  saveQuoteItems,
  QUOTE_UPDATED_EVENT,
  type QuoteItem,
} from "@/lib/quote";
import {
  FaArrowRight,
  FaGlobe,
  FaEnvelope,
  FaCheckCircle,
  FaFileAlt,
  FaSpinner,
  FaExclamationCircle,
  FaTimes,
  FaCloudUploadAlt,
  FaFilePdf,
  FaImage,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/* STYLES                                                                     */
/* -------------------------------------------------------------------------- */

const inputClass =
  "w-full min-w-0 border-b border-white/20 bg-transparent px-1 py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white disabled:cursor-not-allowed disabled:opacity-50";

const selectClass = `${inputClass} cursor-pointer [color-scheme:dark]`;

const labelClass =
  "mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.17em] text-neutral-400";

/* -------------------------------------------------------------------------- */
/* PRODUCT CATEGORIES                                                         */
/* -------------------------------------------------------------------------- */

const products = [
  { value: "hoodies", label: "Hoodies & Sweatshirts" },
  { value: "t-shirts", label: "T-Shirts & Polos" },
  { value: "tracksuits", label: "Sportswear & Tracksuits" },
  { value: "joggers", label: "Joggers & Sweatpants" },
  { value: "jackets", label: "Jackets" },
  { value: "coats", label: "Coats & Outerwear" },
  { value: "other", label: "Other Apparel" },
];

const productGuidance: Record<
  string,
  {
    title: string;
    text: string;
    placeholder: string;
  }
> = {
  hoodies: {
    title: "Hoodie development",
    text: "Share your preferred fabric weight (GSM), fleece or terry preference, fit, colors, artwork and branding placement.",
    placeholder:
      "Tell us about your hoodie style, fabric weight, fit, colors, artwork, labels and finishing requirements...",
  },

  "t-shirts": {
    title: "T-shirt & polo development",
    text: "Tell us about fabric composition, GSM, fit, collar style, sizing, printing and embroidery requirements.",
    placeholder:
      "Describe your T-shirt or polo requirements, including fabric, GSM, fit, collar, colors and branding...",
  },

  tracksuits: {
    title: "Sportswear & tracksuits",
    text: "Include fabric performance, stretch, jacket and trouser details, size breakdown, colors and logo placement.",
    placeholder:
      "Describe your tracksuit requirements, including fabric, fit, jacket and trouser details, colors and branding...",
  },

  joggers: {
    title: "Jogger development",
    text: "Specify fabric, fit, waistband, cuffs, pockets, measurements and any embroidery or printing details.",
    placeholder:
      "Tell us about your jogger or sweatpants design, fabric, fit, waistband, cuffs, pockets and branding...",
  },

  jackets: {
    title: "Jacket development",
    text: "Share the intended construction, outer fabric, lining, closures, pockets, insulation and finishing preferences.",
    placeholder:
      "Describe your jacket style, outer fabric, lining, closures, pockets, construction and branding requirements...",
  },

  coats: {
    title: "Coats & outerwear",
    text: "Include the intended season, shell material, lining, insulation, measurements, closures and finishing requirements.",
    placeholder:
      "Tell us about your outerwear design, intended season, shell material, lining, insulation and construction...",
  },

  other: {
    title: "Custom apparel project",
    text: "Describe the garment category, intended use, materials, design direction, dimensions and customization requirements.",
    placeholder:
      "Describe the garment you want to develop, including its intended use, materials, design and customization...",
  },
};

/* -------------------------------------------------------------------------- */
/* FORM DATA                                                                  */
/* -------------------------------------------------------------------------- */

const initialFormData = {
  fullName: "",
  company: "",
  email: "",
  country: "",
  product: "",
  quantity: "",
  customization: "",
  timeline: "",
  message: "",
  website: "",
  followUpOptIn: false,
};

type FormData = typeof initialFormData;

type RequestQuoteProps = {
  initialProduct?: string;
};

type UploadPhase = "idle" | "uploading" | "processing";

type Status = {
  type: "success" | "error" | "";
  message: string;
};

/* -------------------------------------------------------------------------- */
/* CONSTANTS                                                                  */
/* -------------------------------------------------------------------------- */

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const allowedExtensions = [".ai", ".pdf", ".png", ".jpg", ".jpeg"];

const quantityOptions = [
  { value: "Below 100", label: "Below 100 pieces" },
  { value: "100–300", label: "100–300 pieces" },
  { value: "300–500", label: "300–500 pieces" },
  { value: "500–1000", label: "500–1,000 pieces" },
  { value: "1000–3000", label: "1,000–3,000 pieces" },
  { value: "3000+", label: "3,000+ pieces" },
  { value: "Not sure yet", label: "Not sure yet" },
];

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

function getValidProduct(product: string) {
  return products.some((item) => item.value === product) ? product : "";
}

function getExtension(filename: string) {
  return filename.substring(filename.lastIndexOf(".")).toLowerCase();
}

function formatFileSize(size: number) {
  return size < 1024 * 1024
    ? `${(size / 1024).toFixed(0)} KB`
    : `${(size / (1024 * 1024)).toFixed(2)} MB`;
}

function getFileIcon(file: File) {
  const extension = getExtension(file.name);

  if (extension === ".pdf") return FaFilePdf;

  if ([".jpg", ".jpeg", ".png"].includes(extension)) {
    return FaImage;
  }

  return FaFileAlt;
}

function getProductLabel(value: string) {
  return products.find((item) => item.value === value)?.label ?? value;
}

function getResponseMessage(xhr: XMLHttpRequest) {
  try {
    const result =
      xhr.response && typeof xhr.response === "object"
        ? xhr.response
        : JSON.parse(xhr.responseText || "{}");

    return typeof result?.message === "string" ? result.message : "";
  } catch {
    return "";
  }
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export default function RequestQuote({
  initialProduct = "",
}: RequestQuoteProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const xhrRef = useRef<XMLHttpRequest | null>(null);
  const mountedRef = useRef(true);

  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    product: getValidProduct(initialProduct),
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadPhase, setUploadPhase] = useState<UploadPhase>("idle");

  const [status, setStatus] = useState<Status>({
    type: "",
    message: "",
  });

  const guidance = productGuidance[formData.product];

  /* ------------------------------------------------------------------------ */
  /* QUOTE LIST                                                               */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    mountedRef.current = true;

    const loadQuoteItems = () => {
      setQuoteItems(getQuoteItems());
    };

    loadQuoteItems();

    window.addEventListener(QUOTE_UPDATED_EVENT, loadQuoteItems);
    window.addEventListener("storage", loadQuoteItems);

    return () => {
      mountedRef.current = false;

      window.removeEventListener(QUOTE_UPDATED_EVENT, loadQuoteItems);
      window.removeEventListener("storage", loadQuoteItems);

      const currentXhr = xhrRef.current;
      xhrRef.current = null;
      currentXhr?.abort();
    };
  }, []);

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      product: getValidProduct(initialProduct),
    }));
  }, [initialProduct]);

  const updateQuoteQuantity = (id: string, quantity: number) => {
    if (isSubmitting) return;

    const safeQuantity = Math.max(
      1,
      Math.min(999999, Math.floor(quantity || 1))
    );

    const updatedItems = quoteItems.map((item) =>
      item.id === id
        ? { ...item, quantity: safeQuantity }
        : item
    );

    setQuoteItems(updatedItems);
    saveQuoteItems(updatedItems);
  };

  const removeQuoteItem = (id: string) => {
    if (isSubmitting) return;

    const updatedItems = quoteItems.filter((item) => item.id !== id);

    setQuoteItems(updatedItems);
    saveQuoteItems(updatedItems);
  };

  const totalQuotePieces = quoteItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* ------------------------------------------------------------------------ */
  /* ANIMATIONS                                                               */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".quote-intro",
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".quote-form",
      {
        y: 25,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quote-form",
          start: "top 90%",
          once: true,
        },
      }
    );
  }, section);

  const refreshFrame = requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  return () => {
    cancelAnimationFrame(refreshFrame);
    ctx.revert();
  };
}, []);

  /* ------------------------------------------------------------------------ */
  /* FORM INPUTS                                                              */
  /* ------------------------------------------------------------------------ */

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleFollowUpChange = (checked: boolean) => {
    setFormData((previous) => ({
      ...previous,
      followUpOptIn: checked,
    }));
  };

  /* ------------------------------------------------------------------------ */
  /* FILE UPLOAD                                                              */
  /* ------------------------------------------------------------------------ */

  const addFiles = (incomingFiles: File[]) => {
    if (!incomingFiles.length || isSubmitting) return;

    const errors: string[] = [];
    const validFiles: File[] = [];

    incomingFiles.forEach((file) => {
      const extension = getExtension(file.name);

      if (!allowedExtensions.includes(extension)) {
        errors.push(`${file.name}: Unsupported file format.`);
        return;
      }

      if (file.size === 0) {
        errors.push(`${file.name}: Empty files are not allowed.`);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: Maximum file size is 10 MB.`);
        return;
      }

      validFiles.push(file);
    });

    const combined = [...selectedFiles, ...validFiles];

    const uniqueFiles = combined.filter(
      (file, index, self) =>
        index ===
        self.findIndex(
          (item) =>
            item.name === file.name &&
            item.size === file.size &&
            item.lastModified === file.lastModified
        )
    );

    if (uniqueFiles.length > MAX_FILES) {
      errors.push(`A maximum of ${MAX_FILES} files can be uploaded.`);
    }

    setSelectedFiles(uniqueFiles.slice(0, MAX_FILES));

    setStatus(
      errors.length
        ? {
            type: "error",
            message: errors.join(" "),
          }
        : {
            type: "",
            message: "",
          }
    );
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    addFiles(Array.from(event.target.files || []));

    // Allows selecting the same file again after removing it.
    event.target.value = "";
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();

    setIsDragging(false);

    if (isSubmitting) return;

    addFiles(Array.from(event.dataTransfer.files || []));
  };

  const removeFile = (index: number) => {
    if (isSubmitting) return;

    setSelectedFiles((previous) =>
      previous.filter((_, fileIndex) => fileIndex !== index)
    );

    setStatus({
      type: "",
      message: "",
    });
  };

  const totalFileSize = selectedFiles.reduce(
    (total, file) => total + file.size,
    0
  );

  /* ------------------------------------------------------------------------ */
  /* FORM SUBMISSION                                                          */
  /* ------------------------------------------------------------------------ */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    setUploadProgress(0);
    setUploadPhase("uploading");

    const uploadData = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      uploadData.append(key, String(value));
    });

    // Include all selected products and their quantities.
    uploadData.append("products", JSON.stringify(quoteItems));

    selectedFiles.forEach((file) => {
      uploadData.append("files", file);
    });

    const xhr = new XMLHttpRequest();

    xhrRef.current = xhr;

    xhr.open("POST", "/api/quote");
    xhr.responseType = "json";
    xhr.timeout = 120000;

    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable || !mountedRef.current) return;

      const progress = Math.round(
        (event.loaded / event.total) * 100
      );

      setUploadProgress(progress);

      if (progress >= 100) {
        setUploadPhase("processing");
      }
    };

    xhr.onload = () => {
      if (!mountedRef.current) return;

      const responseMessage = getResponseMessage(xhr);

      if (xhr.status < 200 || xhr.status >= 300) {
        setStatus({
          type: "error",
          message:
            responseMessage ||
            "We couldn't submit your inquiry. Please try again.",
        });

        setIsSubmitting(false);
        setUploadPhase("idle");
        xhrRef.current = null;

        return;
      }

      setStatus({
        type: "success",
        message:
          responseMessage ||
          "Your inquiry has been submitted successfully. Thank you for contacting NORDVIA EXPORTS.",
      });

      setFormData({
        ...initialFormData,
        product: getValidProduct(initialProduct),
      });

      setSelectedFiles([]);
      setQuoteItems([]);
      saveQuoteItems([]);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setUploadProgress(100);
      setUploadPhase("idle");
      setIsSubmitting(false);
      xhrRef.current = null;
    };

    xhr.onerror = () => {
      if (!mountedRef.current) return;

      setStatus({
        type: "error",
        message:
          "Network error. Please check your connection and try again.",
      });

      setIsSubmitting(false);
      setUploadPhase("idle");
      xhrRef.current = null;
    };

    xhr.ontimeout = () => {
      if (!mountedRef.current) return;

      setStatus({
        type: "error",
        message: "The request timed out. Please try again.",
      });

      setIsSubmitting(false);
      setUploadPhase("idle");
      xhrRef.current = null;
    };

    xhr.onabort = () => {
      if (!mountedRef.current) return;

      setStatus({
        type: "error",
        message: "The submission was cancelled.",
      });

      setIsSubmitting(false);
      setUploadPhase("idle");
      xhrRef.current = null;
    };

    xhr.send(uploadData);
  };

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      ref={sectionRef}
      id="request-a-quote"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ---------------------------------------------------------------- */}
        {/* INTRODUCTION                                                     */}
        {/* ---------------------------------------------------------------- */}

        <div className="quote-intro mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-neutral-500" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Start Your Project
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Let&apos;s create
              <span className="text-neutral-500">
                {" "}
                something together.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-neutral-400 sm:text-sm">
            Tell us what you&apos;re looking to develop. Share your
            requirements and design references to start your inquiry.
          </p>
        </div>

        <div className="grid items-start gap-9 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">
          {/* ---------------------------------------------------------------- */}
          {/* LEFT INFORMATION                                                */}
          {/* ---------------------------------------------------------------- */}

          <aside className="quote-intro">
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              NORDVIA EXPORTS / SIALKOT, PAKISTAN
            </p>

            <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
              Your idea.
              <br />
              Your collection.
              <br />
              Your brand.
            </h3>

            <p className="mt-5 max-w-sm text-xs leading-6 text-neutral-400 sm:text-sm">
              Whether you&apos;re starting a clothing brand or expanding
              an existing collection, share your product requirements
              with our team.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-neutral-300">
                  <FaGlobe size={14} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                    Worldwide inquiries
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    For apparel brands and buyers internationally.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-neutral-300">
                  <FaFileAlt size={14} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                    Design references
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Upload sketches, artwork or technical drawings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-neutral-300">
                  <FaEnvelope size={14} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-300">
                    Project communication
                  </p>

                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    We&apos;ll review your inquiry and discuss next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 border-t border-white/10 pt-5">
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600">
                Apparel Manufacturing &amp; Export Inquiries
              </p>
            </div>
          </aside>

          {/* ---------------------------------------------------------------- */}
          {/* QUOTE FORM                                                      */}
          {/* ---------------------------------------------------------------- */}

          <div className="quote-form border border-white/10 bg-[#111111] p-5 sm:p-7 lg:p-8">
            {/* Form heading */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Project inquiry / 01
                </p>

                <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                  Request a Quote
                </h3>
              </div>

              <span className="flex h-10 w-10 items-center justify-center border border-white/15 text-neutral-400">
                <FaArrowRight size={14} />
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              encType="multipart/form-data"
            >
              {/* ---------------------------------------------------------- */}
              {/* HONEYPOT                                                   */}
              {/* ---------------------------------------------------------- */}

              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Leave empty</label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* ---------------------------------------------------------- */}
              {/* CONTACT INFORMATION                                        */}
              {/* ---------------------------------------------------------- */}

              <div>
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  01 / Contact information
                </p>

                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full name *
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      className={inputClass}
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company / Brand
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                      className={inputClass}
                      value={formData.company}
                      onChange={handleChange}
                      maxLength={150}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Business email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className={labelClass}>
                      Destination country *
                    </label>

                    <input
                      id="country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      placeholder="e.g. United Kingdom"
                      className={inputClass}
                      value={formData.country}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* PRODUCT REQUIREMENTS                                       */}
              {/* ---------------------------------------------------------- */}

              <div className="border-t border-white/10 pt-5">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  02 / Product requirements
                </p>

                <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="product" className={labelClass}>
                      Product category *
                    </label>

                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={selectClass}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select product
                      </option>

                      {products.map((product) => (
                        <option key={product.value} value={product.value}>
                          {product.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quantity" className={labelClass}>
                      Estimated quantity *
                    </label>

                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={selectClass}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select quantity
                      </option>

                      {quantityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="customization" className={labelClass}>
                      Customization
                    </label>

                    <select
                      id="customization"
                      name="customization"
                      value={formData.customization}
                      onChange={handleChange}
                      className={selectClass}
                      disabled={isSubmitting}
                    >
                      <option value="">Select option</option>
                      <option value="Custom design">Custom design</option>
                      <option value="Embroidery">Embroidery</option>
                      <option value="Printing">Printing</option>
                      <option value="Private label">Private label</option>
                      <option value="Multiple options">Multiple options</option>
                      <option value="Not decided">Not decided</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className={labelClass}>
                      Expected timeline
                    </label>

                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={selectClass}
                      disabled={isSubmitting}
                    >
                      <option value="">Select timeline</option>
                      <option value="As soon as possible">
                        As soon as possible
                      </option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="1–3 months">1–3 months</option>
                      <option value="3+ months">3+ months</option>
                      <option value="Planning stage">Planning stage</option>
                    </select>
                  </div>
                </div>

                {/* Dynamic product guidance */}
                {guidance && (
                  <div className="mt-4 border-l-2 border-white/40 bg-white/[0.035] px-4 py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-300">
                      {guidance.title}
                    </p>

                    <p className="mt-1.5 text-[11px] leading-5 text-neutral-400">
                      {guidance.text}
                    </p>
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------------- */}
              {/* SELECTED PRODUCTS                                         */}
              {/* ---------------------------------------------------------- */}

              <div className="border-t border-white/10 pt-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                      03 / Selected products
                    </p>

                    <p className="mt-1 text-[10px] text-neutral-500">
                      Products added from the product pages or quote list.
                    </p>
                  </div>

                  <span className="shrink-0 border border-white/15 px-3 py-1.5 text-[9px] uppercase tracking-wider text-neutral-300">
                    {quoteItems.length}{" "}
                    {quoteItems.length === 1 ? "Item" : "Items"}
                  </span>
                </div>

                {quoteItems.length > 0 ? (
                  <div className="space-y-2">
                    {quoteItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-wrap items-center gap-3 border border-white/10 bg-white/[0.025] p-3 sm:flex-nowrap"
                      >
                        {/* Product image */}
                        {item.image ? (
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-white/10 bg-white">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-contain p-1"
                            />
                          </div>
                        ) : (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-[8px] uppercase tracking-wider text-neutral-500">
                            Product
                          </div>
                        )}

                        {/* Product information */}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold text-white">
                            {item.name}
                          </p>

                          <p className="mt-1 text-[9px] uppercase tracking-wider text-neutral-500">
                            {item.category} · {item.code}
                          </p>
                        </div>

                        {/* Quantity and remove */}
                        <div className="flex items-center gap-2">
                          <label
                            htmlFor={`quote-quantity-${item.id}`}
                            className="text-[9px] uppercase tracking-wider text-neutral-500"
                          >
                            Qty
                          </label>

                          <input
                            id={`quote-quantity-${item.id}`}
                            type="number"
                            min={1}
                            max={999999}
                            step={1}
                            value={item.quantity}
                            onChange={(event) =>
                              updateQuoteQuantity(
                                item.id,
                                Number(event.target.value)
                              )
                            }
                            disabled={isSubmitting}
                            className="w-[76px] border border-white/15 bg-transparent px-2 py-2 text-center text-xs text-white outline-none focus:border-white/60 disabled:opacity-50"
                          />

                          <button
                            type="button"
                            onClick={() => removeQuoteItem(item.id)}
                            disabled={isSubmitting}
                            aria-label={`Remove ${item.name}`}
                            className="flex h-8 w-8 cursor-pointer items-center justify-center text-neutral-500 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed"
                          >
                            <FaTimes size={12} />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-500">
                        Total requested pieces
                      </span>

                      <span className="text-sm font-semibold tabular-nums text-white">
                        {totalQuotePieces.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="border border-dashed border-white/15 bg-white/[0.02] px-4 py-5">
                    <p className="text-xs text-neutral-400">
                      No products added yet.
                    </p>

                    <Link
                      href="/products"
                      className="mt-2 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-wider text-white transition hover:text-neutral-400"
                    >
                      Explore products
                      <FaArrowRight size={10} />
                    </Link>
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------------- */}
              {/* PROJECT DETAILS                                            */}
              {/* ---------------------------------------------------------- */}

              <div className="border-t border-white/10 pt-5">
                <label htmlFor="message" className={labelClass}>
                  Project details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder={
                    guidance
                      ? guidance.placeholder
                      : "Describe your product, materials, colors, design and requirements..."
                  }
                  className={`${inputClass} resize-y`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  disabled={isSubmitting}
                />

                <p className="mt-1 text-right text-[9px] text-neutral-600">
                  {formData.message.length}/5000 characters
                </p>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* DESIGN ATTACHMENTS                                         */}
              {/* ---------------------------------------------------------- */}

              <div className="border-t border-white/10 pt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    04 / Design attachments
                  </p>

                  <span className="text-[9px] text-neutral-600">
                    Optional
                  </span>
                </div>

                <input
                  ref={fileInputRef}
                  id="designFiles"
                  type="file"
                  multiple
                  accept=".ai,.pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                  onChange={handleFileChange}
                  disabled={isSubmitting || selectedFiles.length >= MAX_FILES}
                  className="hidden"
                />

                <label
                  htmlFor="designFiles"
                  onDragOver={(event) => {
                    event.preventDefault();

                    if (!isSubmitting) {
                      setIsDragging(true);
                    }
                  }}
                  onDragLeave={(event) => {
                    event.preventDefault();
                    setIsDragging(false);
                  }}
                  onDrop={handleDrop}
                  className={`flex cursor-pointer items-center gap-4 border border-dashed px-4 py-5 transition-all duration-200 ${
                    isDragging
                      ? "border-white bg-white/[0.12]"
                      : "border-white/25 bg-white/[0.025] hover:border-white/60 hover:bg-white/[0.05]"
                  } ${
                    isSubmitting || selectedFiles.length >= MAX_FILES
                      ? "pointer-events-none opacity-50"
                      : ""
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-black">
                    <FaCloudUploadAlt size={20} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-white">
                      {isDragging
                        ? "Drop your files here"
                        : "Drag & drop your designs"}
                    </span>

                    <span className="mt-1 block text-[9px] leading-4 text-neutral-500">
                      Or browse files · AI, PDF, PNG, JPG · Max 5 files,
                      10 MB each
                    </span>
                  </span>

                  <span className="ml-auto shrink-0 text-[9px] font-bold uppercase tracking-wider text-neutral-300">
                    Browse
                  </span>
                </label>

                {/* Selected file list */}
                {selectedFiles.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {selectedFiles.map((file, index) => {
                      const FileIcon = getFileIcon(file);

                      return (
                        <div
                          key={`${file.name}-${file.lastModified}-${index}`}
                          className="flex items-center gap-3 border border-white/10 bg-white/[0.025] px-3 py-2.5"
                        >
                          <FileIcon className="shrink-0 text-neutral-400" />

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[11px] text-white">
                              {file.name}
                            </p>

                            <p className="mt-0.5 text-[9px] text-neutral-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            disabled={isSubmitting}
                            aria-label={`Remove ${file.name}`}
                            className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center text-neutral-500 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed"
                          >
                            <FaTimes size={11} />
                          </button>
                        </div>
                      );
                    })}

                    <p className="text-right text-[9px] text-neutral-600">
                      {selectedFiles.length} file(s) ·{" "}
                      {formatFileSize(totalFileSize)}
                    </p>
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------------- */}
              {/* FOLLOW-UP CONSENT                                         */}
              {/* ---------------------------------------------------------- */}

              <div className="space-y-3 border-t border-white/10 pt-5">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="followUpOptIn"
                    checked={formData.followUpOptIn}
                    onChange={(event) =>
                      handleFollowUpChange(event.target.checked)
                    }
                    disabled={isSubmitting}
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-white"
                  />

                  <span className="text-[11px] leading-5 text-neutral-300">
                    Email me a follow-up with next steps and new designs.
                    <span className="text-neutral-500">
                      {" "}
                      Unsubscribe any time.
                    </span>
                  </span>
                </label>

                <p className="text-[10px] leading-5 text-neutral-500">
                  We use your details only to reply to this request.{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-neutral-300 underline underline-offset-4 transition hover:text-white"
                  >
                    Privacy policy
                  </a>
                </p>
              </div>

              {/* ---------------------------------------------------------- */}
              {/* UPLOAD PROGRESS                                            */}
              {/* ---------------------------------------------------------- */}

              {isSubmitting && (
                <div
                  className="border border-white/10 bg-white/[0.035] p-4"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <FaSpinner className="animate-spin text-neutral-300" />

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                        {uploadPhase === "processing"
                          ? "Processing your inquiry"
                          : "Uploading your files"}
                      </span>
                    </div>

                    <span className="text-xs tabular-nums text-neutral-400">
                      {uploadProgress}%
                    </span>
                  </div>

                  <div
                    className="h-1 w-full overflow-hidden bg-white/10"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={uploadProgress}
                  >
                    <div
                      className="h-full bg-white transition-all duration-200"
                      style={{
                        width: `${uploadProgress}%`,
                      }}
                    />
                  </div>

                  <p className="mt-2 text-[9px] text-neutral-500">
                    {uploadPhase === "processing"
                      ? "Your files have been sent. Waiting for confirmation..."
                      : "Please keep this page open while your inquiry is being uploaded."}
                  </p>
                </div>
              )}

              {/* ---------------------------------------------------------- */}
              {/* STATUS FEEDBACK                                            */}
              {/* ---------------------------------------------------------- */}

              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 border p-3 text-xs leading-5 ${
                    status.type === "success"
                      ? "border-green-500/25 bg-green-500/[0.07] text-green-300"
                      : "border-red-500/25 bg-red-500/[0.07] text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="mt-0.5 shrink-0" />
                  ) : (
                    <FaExclamationCircle className="mt-0.5 shrink-0" />
                  )}

                  <p>{status.message}</p>
                </div>
              )}

              {/* ---------------------------------------------------------- */}
              {/* SUBMIT BUTTON                                              */}
              {/* ---------------------------------------------------------- */}

              <div className="border-t border-white/10 pt-5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full cursor-pointer items-center justify-between bg-white px-5 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-black transition-colors duration-300 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>
                    {isSubmitting
                      ? uploadPhase === "processing"
                        ? "Processing Inquiry..."
                        : "Uploading..."
                      : "Submit Your Inquiry"}
                  </span>

                  {isSubmitting ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>

                <p className="mt-3 text-[9px] leading-5 text-neutral-600">
                  Fields marked with * are required. Your information
                  will be used to respond to your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}