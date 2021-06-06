import { JoinLinks } from '../../data/join'

export const JoinList = () => {
  return (
    <ul className="flex mx-10 mt-2 justify-center flex-col　md:flex-row flex-wrap">
      {JoinLinks.map((join) => (
        <li
          key={join.name}
          className="flex flex-col justify-start items-center bg-white mb-10 px-2 md:px-10 md:w-2/5"
        >
          {join.icon && (
            <img
              className="flex justify-center"
              src={join.icon}
              alt={join.name}
              width={join.width}
              height={join.height}
            />
          )}
          <div className={join.margin}></div>
          <h3 className="mt-1 mb-4 text-gray-900 text-2xl font-medium">{join.name}</h3>
          <div className="text-gray-500 text-sm">
            {join.desc}
            {join.invite}
            <a href={join.url} className="text-primary hover:underline">
              こちら
            </a>
            から。
          </div>
        </li>
      ))}
    </ul>
  )
}
