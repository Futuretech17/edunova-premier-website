import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageSquare, Calendar, Users, CheckCircle, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  parentName: z.string().min(2, { message: 'Parent name is required' }),
  studentName: z.string().min(2, { message: 'Student name is required' }),
  age: z.string().min(1, { message: 'Age is required' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  phone: z.string().min(9, { message: 'Valid phone number required' }),
  email: z.string().email({ message: 'Valid email address required' }),
  message: z.string().optional(),
});

const steps = [
  { icon: MessageSquare, title: 'Submit Inquiry', desc: 'Tell us about your child and their needs' },
  { icon: Calendar, title: 'Free Consultation', desc: 'We schedule a no-obligation call with you' },
  { icon: Users, title: 'Assessment', desc: 'We evaluate the student\'s current level' },
  { icon: CheckCircle, title: 'Enrollment', desc: 'Tailored program begins within days' },
];

export function AdmissionsSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: '',
      studentName: '',
      age: '',
      service: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: 'Inquiry Submitted',
      description: 'Our team will reach out within 24 hours. Thank you!',
    });
    form.reset();
  }

  return (
    <section id="admissions" className="py-24 bg-white" data-testid="section-admissions">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Get Started</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Join Edunova
          </h3>
          <p className="text-lg text-foreground/70">
            Enrollment is simple and straightforward. We will guide you every step of the way — from your first inquiry to your child's first session.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border -z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-lg border-4 border-white relative z-10">
                  <step.icon size={24} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-primary text-xs font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h4 className="font-bold text-primary mb-1">{step.title}</h4>
                <p className="text-sm text-foreground/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-10 border border-border/50 shadow-sm">
          <h4 className="text-2xl font-bold text-primary font-serif mb-2 text-center">Submit an Inquiry</h4>
          <p className="text-center text-foreground/60 text-sm mb-8">We will respond within 24 hours, Monday to Saturday.</p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-inquiry">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent / Guardian Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" className="bg-white" {...field} data-testid="input-parent-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Student's full name" className="bg-white" {...field} data-testid="input-student-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Student's Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g. 10" className="bg-white" {...field} data-testid="input-age" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white" data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personalized-learning">Personalized Learning</SelectItem>
                          <SelectItem value="one-on-one-tutoring">One-on-One Tutoring</SelectItem>
                          <SelectItem value="homeschooling-support">Homeschooling Support</SelectItem>
                          <SelectItem value="after-school-tuition">After-School Tuition</SelectItem>
                          <SelectItem value="academic-coaching">Academic Coaching</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="0712 345 678" className="bg-white" {...field} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" className="bg-white" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your child (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share any details about your child's needs, challenges, or goals..."
                        className="bg-white min-h-[100px]"
                        {...field}
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-bold shadow-md" data-testid="button-submit-inquiry">
                <Send className="mr-2 h-4 w-4" /> Submit Inquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
