
export default function page() {
  return (
    <div className='container py-5'>
      <h1>Profile Page</h1>
      <p>{process.env.APP_URL}</p>
    </div>
  )
}
