type TCreateUrlProps<TParams> = {
  path: string;
  params?: TParams;
};

export const createUrl = <TParams>({
  path,
  params,
}: TCreateUrlProps<TParams>) =>
  `https://api.github.com${path}${
    params && Object.keys(params ?? {}).length !== 0
      ? '?' + new URLSearchParams(params).toString()
      : ''
  }`;
