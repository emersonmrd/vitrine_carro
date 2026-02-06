const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

export const api = {
  showcase: {
    getHome: async () => {
      const res = await fetch(`${API_URL}/showcase`);
      if (!res.ok) throw new Error("Erro ao buscar dados");
      return res.json();
    },
  },
};
