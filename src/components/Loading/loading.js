"use client";
import { LoadingSpinner, Spinner } from "./loading.style";

export default function PubLoading() {
  return (
    <LoadingSpinner>
      <Spinner></Spinner>
    </LoadingSpinner>
  );
}
