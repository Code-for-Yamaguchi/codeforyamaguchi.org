import Image from 'next/image'
import Link from 'next/link'

export const PageTop = () => {
    return (
        <div className="relative z-0">
            <div className="h-screen flex flex-col justify-center items-center px-4 py-6 sm:px-6 space-y-6">
                <div className="flex justify-center text-gray-500 text-base sm:text-3xl clearfix">
                    山口県の挑戦者が集まるコミュニティ
                </div>
                <div className="flex justify-center text-center text-gray-400 text-sm sm:text-xl clearfix">
                    テクノロジーを活用して地域課題を解決しよう。<br />
                    課題が多い地方。挑戦する人が少ないためより大きな価値を生む。
                </div>
            </div>
        </div>
    )
}
