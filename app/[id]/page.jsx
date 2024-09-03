
const page = ({ params }) => {
    return (
        <section className="flex min-h-screen flex-col items-center justify-between p-8 bg-bgcolor"> 
            {params.id}
        </section>
    )
}

export default page