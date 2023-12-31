

function Edit({ edit, setEdit }) {
  return (
    <button className="edit m-1 p-2 transition ease-in-out rounded-full hover:bg-slate-200 hover:translate-x-px hover:translate-y-px" onClick={() => setEdit(!edit)}>
      {edit ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#110105" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> :
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="20 6 9 17 4 12"></polyline></svg>}
    </button>
  )
}

export default Edit