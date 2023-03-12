const header = { "Authorization" : `Bearer ${process.env.NEXT_PUBLIC_GITTOKEN}` }

export const options = {
  method: "GET",
  headers: header
};

export const baseSearch = "react"