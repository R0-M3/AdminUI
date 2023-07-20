
function Delete({ value, removeUsers }) {
  return (
    <button className="group/delete m-1 p-2 transition ease-in-out rounded-full hover:bg-slate-200 hover:translate-x-px hover:translate-y-px" onClick={e => removeUsers([value])}>
      <svg className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
    </button>
  )
}

export default Delete