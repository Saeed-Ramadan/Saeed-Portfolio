import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { contactSchema, ContactInput } from "../schemas/contactSchema";

// RATIONALE: Separating form validation and WhatsApp dispatch logic from the Contact UI component.
// Uses React Hook Form for client validation and TanStack Query v5 for asynchronous mutation handling.
// Submissions format client details into a professional WhatsApp template sent directly to +201126488442.
export const useContactForm = () => {
  const { i18n } = useTranslation();
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
    },
  });

  const sendWhatsAppMutation = useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate quick dispatch preparation
      await new Promise((resolve) => setTimeout(resolve, 500));

      const targetPhone = "201126488442";
      const isArabic = i18n.language === "ar";

      const formattedMessage = isArabic
        ? `*رسالة جديدة عبر الموقع التعريفي (Portfolio)* 🚀\n` +
          `━━━━━━━━━━━━━━━━━━━━\n` +
          `👤 *الاسم الكريم:* ${data.name.trim()}\n` +
          `✉️ *البريد الإلكتروني:* ${data.email.trim()}\n` +
          `📝 *تفاصيل الرسالة أو المشروع:*\n${data.project.trim()}\n` +
          `━━━━━━━━━━━━━━━━━━━━\n` +
          `تم الإرسال من خلال نموذج التواصل بموقع المهندس سعيد رمضان`
        : `*New Message via Portfolio Website* 🚀\n` +
          `━━━━━━━━━━━━━━━━━━━━\n` +
          `👤 *Name:* ${data.name.trim()}\n` +
          `✉️ *Email:* ${data.email.trim()}\n` +
          `📝 *Message / Project Details:*\n${data.project.trim()}\n` +
          `━━━━━━━━━━━━━━━━━━━━\n` +
          `Sent via Saeed Ramadan's Portfolio Contact Form`;

      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMessage)}`;
      setLastWhatsAppUrl(waUrl);

      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }

      return waUrl;
    },
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (data: ContactInput) => {
    sendWhatsAppMutation.mutate(data);
  };

  const resetMutation = () => {
    sendWhatsAppMutation.reset();
    setLastWhatsAppUrl(null);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting: sendWhatsAppMutation.isPending,
    isSuccess: sendWhatsAppMutation.isSuccess,
    isError: sendWhatsAppMutation.isError,
    lastWhatsAppUrl,
    resetMutation,
  };
};

