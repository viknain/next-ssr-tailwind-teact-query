export const ssrGetHomePageData = async () => {
    return (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`)).json();
}
export const ssrGetDashboardPageData = async () => {
    return (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard`)).json();
}