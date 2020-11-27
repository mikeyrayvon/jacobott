import { RichText, Elements } from 'prismic-reactjs';

import { linkResolver } from 'prismic-configuration'

// -- Function to add unique key to props
const propsWithUniqueKey = (props, key) => {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = (type, element, content, children, key) => {
  if (type === 'image') {
    return (
      <figure key={key}>
        <a href={element.url}><img
          src={element.url}
          alt={element.alt || ''}
          copyright={element.copyright || ''}
        /></a>
        {element.alt &&
          <figcaption className='mt-2 text-xs'>{element.alt}</figcaption>
        }
      </figure>
    )
  }

  // Return null to stick with the default behavior for everything else
  return null
}

const RichTextCustom = ({ render }) => {
  return (
    <RichText
      render={render}
      linkResolver={linkResolver}
      htmlSerializer={htmlSerializer}
    />
  )
}

export default RichTextCustom
