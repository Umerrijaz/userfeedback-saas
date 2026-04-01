import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        <p>Welcome back {name}</p>
      </Link>
    );
  }
  return <button className="btn btn-primary">ButtonLogin</button>;
};

export default ButtonLogin;
