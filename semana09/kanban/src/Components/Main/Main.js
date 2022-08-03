import './Main.css'
import Column from '../Column/Column'

const Main = () => {
    return (
        <main className='main'>
            <h1 className='main-title'>Kanban</h1>
            <div className='main-container'>
                <Column nameColumn='To Do' color='blue' img='./img/iconToDo.png' />
                <Column nameColumn='Inprogress' color='orange' img='./img/iconInProgress.png' />
                <Column nameColumn='Review' color='purple' img='./img/iconReview.png' />
                <Column nameColumn='Done' color='green' img='./img/iconDone.png' />
            </div>
        </main >
    )
}

export default Main