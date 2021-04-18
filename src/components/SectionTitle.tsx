type Props = {
    title: string
    subtitle: string
}

export const SectionTitle = ({ title, subtitle }: Props) => {
    return (
        <div className="border-l-8 border-green-500 mt-8 pl-20 px-4 py-6">
            <div className="text-green-400 text-6xl mb-4">{title}</div>
            <sub className="text-green-400 text-base">{subtitle}</sub>
        </div>
    )
}
