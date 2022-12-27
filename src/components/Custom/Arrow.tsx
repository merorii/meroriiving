export const CustomArrow = (props: any) => {
  const { className, style, onClick, fade } = props;
  const prev = className.includes("prev");

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        width: "50px",
        height: "100%",
        background: `url('https://www.tving.com/img/icon_slide_${
          prev ? "left" : "right"
        }.svg')
            ${
              fade
                ? ""
                : ", linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0) 44%, rgba(0, 0, 0, 0))"
            }`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: fade ? "50% 35%" : "50%",
      }}
      onClick={onClick}
    />
  );
};
