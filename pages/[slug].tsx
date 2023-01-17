import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Home.module.scss'

type getStaticPropsType = {
  params: {
    slug: number
  },
  locales: undefined,
  locale: undefined,
  defaultLocale: undefined
}

type SpecificPokemonProps = {
  pokeInfo: {
    height: number,
    weight: number,
    image: string,
    name: string
  }
}

type PokemonType = {
  name: string,
  url: string
}

const SpecificPokemon = ({ pokeInfo }: SpecificPokemonProps) => {
  return (
    <div className={styles.pokemonContainer}>
      <Image src={pokeInfo.image} alt={`${pokeInfo.name} photo`} width="100" height="100" />
      <h1>{pokeInfo.name}</h1>
      <h2>height: {pokeInfo.height}</h2>
      <h2>weight: {pokeInfo.weight}</h2>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
  const data = await res.json()
  const pokemons = data.results

  return {
    paths: pokemons.map((pokemon: PokemonType) => ({
      params: {
        slug: pokemon.url.split('/')[6]
      }
    }
    )),
    fallback: false
  }
}

export async function getStaticProps({ params }: getStaticPropsType) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`)
  const pokemon = await res.json()
  return {
    props: {
      pokeInfo: {
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.sprites.front_default,
        name: pokemon.name
      }
    }
  }
}

export default SpecificPokemon