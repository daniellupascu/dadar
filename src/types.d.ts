type Src = string | (<T = string>() => Promise<T>);

type Optional<T> = T | null | undefined;

type User = {
  id: string;
  name?: string;
  avatarUrl?: Optional<string>;
  roles?: Array<string>;
  phoneNumber?: Optional<string>;
  displayName?: Optional<string>;
  email?: Optional<string>;
};

type DropdownOption = {
  title: string;
  subtitle: string;
  acronym?: string;
};
