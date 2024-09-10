export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return "https://iclean-latest.vercel.app/";
  } else if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  } else {
    return "http://localhost:3000";
  }
};
