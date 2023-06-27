
export type LoginUserProps = {
  email: string;
  password: string;
}

export type SignUpUserProps = {
  email: string;
  password: string;
  profile: objectProfileProps
}

type objectProfileProps = {
  firstName: string;
  lastName: string;
}

export type Token = {
  sub: string
  user: string
  profile: string
}
