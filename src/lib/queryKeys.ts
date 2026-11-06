export const queryKeys = {
  campsites: {
    list: (pet: boolean | undefined) => ["campsites", "list", pet],
    detail: (id: string) => ["campsites", "detail", id],
  },
  trips: {
    all: () => ["trips"],
  },
};
