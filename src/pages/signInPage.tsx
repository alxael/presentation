import { styled } from "@mui/system";
import SignInForm from "../components/signInForm";

const Main = styled("main")(({ theme }) => ({
  minHeight: "calc(100vh - 2rem)",
  minWidth: "calc(100vw - 2rem)",
  padding: "1rem",
  background: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export interface SignInPageProps {
  signInHandler: (email: string, password: string) => void
}

const SignInPage = (props: SignInPageProps) => {
  return (
    <Main>
      <SignInForm signInHandler={props.signInHandler} />
    </Main>
  );
};

export default SignInPage;
