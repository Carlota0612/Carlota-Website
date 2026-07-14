import { draftMode } from "next/headers";
import { VisualEditing as SanityVisualEditing } from "next-sanity";

export async function VisualEditing() {
  return (await draftMode()).isEnabled ? <SanityVisualEditing /> : null;
}
