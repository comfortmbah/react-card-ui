export function Card ({ image, title,description, buttonText }) {
  return (
    <div className='max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg border border-b-gray-200'>
      <img src={image} alt={title} className='h-56 w-full object-cover' />
      <div className="p-5 flex flex-col items-center bg-slate-100">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
        <button className="mt-5 rounded-xl bg-black px-5 py-2 text-white transition hover:opacity-80">{buttonText}</button>
      </div>
    </div>
  )
};