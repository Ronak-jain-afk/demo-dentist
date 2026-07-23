'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().min(10, { message: 'Phone number is required.' }),
  date: z.string().min(1, { message: 'Please select a date.' }),
  treatment: z.string().min(1, { message: 'Please select a treatment.' }),
  message: z.string().optional(),
})

export function Appointment() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      date: '',
      treatment: '',
      message: '',
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('Appointment Request Sent!', {
      description: 'Our team will contact you shortly to confirm your visit.',
    })
    form.reset()
  }

  return (
    <section id="appointment" className="py-24 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-primary -z-20" />

      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-white/5 blur-3xl -z-10 rotate-12 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            className="text-primary-foreground"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 w-fit text-sm font-semibold mb-6">
              <span className="text-white">Book Your Visit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready for a Healthier,<br/>Brighter Smile?
            </h2>
            
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
              Schedule your appointment today and take the first step toward a healthier, more confident you. We&apos;ll make sure your visit is comfortable and stress-free.
            </p>
          </div>

          <div 
            className="bg-card p-8 md:p-10 rounded-[2rem] shadow-2xl border border-border/50 relative"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Full Name" className="h-12 bg-muted/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone Number" className="h-12 bg-muted/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email Address" type="email" className="h-12 bg-muted/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="date" className="h-12 bg-muted/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="treatment"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-muted/50 text-muted-foreground">
                            <SelectValue placeholder="Select Treatment" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Dentistry</SelectItem>
                          <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                          <SelectItem value="implants">Dental Implants</SelectItem>
                          <SelectItem value="orthodontics">Orthodontics</SelectItem>
                          <SelectItem value="emergency">Emergency Care</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Message (Optional)" 
                          className="resize-none bg-muted/50 min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base font-semibold" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Scheduling...
                    </>
                  ) : (
                    'Schedule Appointment'
                  )}
                </Button>
                
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  )
}
