export function getWhatsAppUrl(
  phone: string = "+918797124734",
  message: string = "Hello, I would like to inquire about accounting and tax services."
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
