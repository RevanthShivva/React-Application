import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import IconButtonComponent from "../../atoms/Icons/Icon"

export interface NavProps {
  source: React.ReactNode;
  variant:string;
  title: string;
  className?: string;
  onClick?: () => void;
}

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "row",
  },
  typography: {
    alignSelf: "center",
  },
});

export const Nav = (props: any) => {
  let {source, variant, onClick, className, title} = props
  let style = useStyles();
  return (
    <>
      <div className={style.main}>
        <IconButtonComponent>{source}</IconButtonComponent>
        <Typography
          variant={variant}
          textAlign='start'
          className={`${style.typography} ${className}`}
          onClick={onClick}
        >
          {title}
        </Typography>
      </div>
    </>
  );
};