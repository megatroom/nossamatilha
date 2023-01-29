import config from 'hooks/config'

const AddressWidget = () => {
  const {
    googleMaps: { apiKey },
  } = config()

  return (
    <div>
      <iframe
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Nossa+Matilha+Creche+Educativa,Resende+RJ`}
      ></iframe>
    </div>
  )
}

export default AddressWidget
