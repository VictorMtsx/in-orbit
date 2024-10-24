import { X } from 'lucide-react'
import { z } from 'zod'
import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from './ui/radio-group'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createGoal } from '../http/create-goal'
import { QueryClient } from '@tanstack/react-query'

const createGoalForm = z.object({
  tittle: z
    .string()
    .min(1, { message: 'Informe a atividade que deseja realizar!' }),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type createGoalFormData = z.infer<typeof createGoalForm>

export function CreacteGoal() {
  const queryClient = new QueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<createGoalFormData>({
      resolver: zodResolver(createGoalForm),
    })

  async function handleCreateGoal(data: createGoalFormData) {
    await createGoal({
      title: data.tittle,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    reset()
  }

  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastrar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>

          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateGoal)}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercícios ,meditar etc "
                {...register('tittle')}
              />

              {formState.errors.tittle && (
                <p className="text-xs text-red-500">
                  {formState.errors.tittle.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Quantas vezes na semana ?</Label>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                render={({ field }) => {
                  return (
                    <div className="flex flex-col gap-2">
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                      >
                        <RadioGroupItem value="1">
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            1x na semana
                          </span>
                          <span className="text-lg leading-none">🥱</span>
                        </RadioGroupItem>
                      </RadioGroup>

                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                      >
                        <RadioGroupItem value="2">
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            2x na semana
                          </span>
                          <span className="text-lg leading-none">🙂</span>
                        </RadioGroupItem>
                      </RadioGroup>

                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                      >
                        <RadioGroupItem value="3">
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            3x na semana
                          </span>
                          <span className="text-lg leading-none">😎</span>
                        </RadioGroupItem>
                      </RadioGroup>

                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                      >
                        <RadioGroupItem value="4">
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            4x na semana
                          </span>
                          <span className="text-lg leading-none">😜</span>
                        </RadioGroupItem>
                      </RadioGroup>

                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                      >
                        <RadioGroupItem value="5">
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            5x na semana
                          </span>
                          <span className="text-lg leading-none">🤨</span>
                        </RadioGroupItem>
                      </RadioGroup>

                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                      >
                        <RadioGroupItem value="6">
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            6x na semana
                          </span>
                          <span className="text-lg leading-none">🤯</span>
                        </RadioGroupItem>
                      </RadioGroup>

                      <RadioGroup
                        onValueChange={field.onChange}
                        value={String(field.value)}
                      >
                        <RadioGroupItem value="all-days">
                          <RadioGroupIndicator />
                          <span className="text-zinc-300 text-sm font-medium leading-none">
                            Todos os dias da semana
                          </span>
                          <span className="text-lg leading-none">🔥</span>
                        </RadioGroupItem>
                      </RadioGroup>
                    </div>
                  )
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose>
              <Button type="button" className="flex-1" variant="secondary">
                Fechar
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
