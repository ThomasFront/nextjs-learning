import React from 'react'

const SpecificCar = (props: any) => {
  return (
    <div>
      <h2>Specific Car</h2>
      <h1>ID: {props.id}</h1>
    </div>
  )
}


export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }, { params: { slug: "4" } }],
    fallback: false
  }
}

export async function getStaticProps(context: any) {
  return {
    props: {
      id: context.params.slug
    }
  }
}


export default SpecificCar