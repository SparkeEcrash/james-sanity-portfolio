export const getPageData = async (url: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
  const data = await res.json();
  const pageInfo = data.pageInfo;
  return pageInfo[0];
};

export const getPageDataNoCache = async (url: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const pageInfo = data.pageInfo;
  return pageInfo[0];
};

// if { revalidate: 10 } is the case it means to
// revalidate this data every 10 seconds at most.
// { revalidate: 0 } means not to cache at all.