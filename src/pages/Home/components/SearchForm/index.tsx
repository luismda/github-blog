import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { SearchFormContainer } from './style'

const SearchFormSchema = z.object({
  query: z.string().trim(),
})

type SearchFormData = z.infer<typeof SearchFormSchema>

interface SearchFormProps {
  onSubmit: (query: string) => void
}

export function SearchForm({ onSubmit }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(SearchFormSchema),
  })

  function handleSearch(data: SearchFormData) {
    onSubmit(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input
        type="search"
        placeholder="Buscar conteúdo"
        aria-label="Buscar por postagens"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
