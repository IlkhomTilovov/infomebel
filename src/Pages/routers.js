import { lazy, Suspense } from "react"
const Home = lazy(() => import('./Home'));
const Clients = lazy(() => import('./Clients'));
const Componies = lazy(() => import('./Componies'));
const ComponiesPage = lazy(() => import('./ComponiesPage'));
const funSuspense = (Component) => {
    return <Suspense fallback={<>loading...</>}>
        <Component />
    </Suspense>
}
export const data = [
    {
        id: 1,
        element: funSuspense(Clients),
        path: "/"
    },
    {
        id: 2,
        element: funSuspense(Home),
        path: "/home"
    },
    {
        id: 3,
        element: funSuspense(Componies),
        path: "/componies"
    },
    {
        id: 4,
        element: funSuspense(ComponiesPage),
        path: "/componiesPage/:id"
    },
]