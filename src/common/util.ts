export const imageUrl = (id: string) => {
  return `https://image.tmdb.org/t/p/original${id}`;
};

export const country = (country: string) => {
  switch (country) {
    case "KO":
      return "한국";
    case "US":
      return "미국";
    case "GB":
      return "영국";
    case "AU":
      return "호주";
    case "FR":
      return "프랑스";
    default:
      return country;
  }
};

export const menuName = (name: string) => {
  switch (name) {
    case "popular":
      return "현재 인기있는";
    case "top_rated":
      return "상위 랭킹";
    case "now_playing":
      return "상영중인";
    case "upcoming":
      return "개봉 예정";
    default:
      return "";
  }
};
