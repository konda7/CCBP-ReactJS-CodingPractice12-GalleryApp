import './index.css'

const ThumbnailItem = props => {
  const {eachImg, updateImgId, selectedId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachImg

  const selectImg = () => {
    updateImgId(id)
  }

  const selectImage = selectedId === id ? 'select-image-thumbnail' : ''

  return (
    <li className="images-list">
      <button type="button" className="image-btn" onClick={selectImg}>
        <img
          src={thumbnailUrl}
          className={`image-thumbnail ${selectImage}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
