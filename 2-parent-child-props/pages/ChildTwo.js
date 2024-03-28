export default function ChildTwo({childParent}) {
    const data = "This is the data from the child page to the parent page."
    
    return(
        <>
            <button onClick={() => childParent(data)}>Click Child to Parent</button>
        </>
    )
}