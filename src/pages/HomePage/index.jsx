import furnitureArray from '../../helpers/furniture-database'
import Furniture from '../../components/Furniture'
import './style.css'

function HomePage() {
    return (
        <>
            <div className="homepage__title">
                <h1 className="homepage__heading">Aktuální nabídka</h1>
                <p className="homepage__paragraph">Nejnovější prémiové produkty od&nbsp;předních českých designerů.</p>
                <p className="homepage__paragraph">Doprava zdarma až k vám domů.</p>
                <p className="homepage__paragraph">Na cenu nehleďte.</p>
            </div>

            <div className="homepage__list">
                {furnitureArray.map(oneFurniture => <Furniture key={oneFurniture.id} name={oneFurniture.name} image={oneFurniture.image} id={oneFurniture.id} />)}
            </div>
        </>
    )
}

export default HomePage