export interface ISidebar {
    label: string
    Icon: string
    to: string
    children: [
    {
        label: string
        Icon: string
        to: string
    }]
}