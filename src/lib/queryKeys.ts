export const queryKeys = {
  campsites: {
    list: (pet?: boolean) => ["campsites", "list", pet],
    detail: (id: number) => ["campsites", "detail", id],
  },
  trips: {
    all: () => ["trips"],
  },
};
