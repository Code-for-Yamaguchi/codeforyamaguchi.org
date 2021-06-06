type Props = {
  title: string
  subtitle: string
}

export const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="border-l-8 border-green-500 mt-8 pl-9 md:pl-36 px-4 py-2">
      <div className="text-primary text-3xl md:text-5xl mb-1">{title}</div>
      <sub className="text-primary text-sm md:text-base">{subtitle}</sub>
    </div>
  )
}
