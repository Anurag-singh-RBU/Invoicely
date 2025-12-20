"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ImgSelect from "./(Image Selector)/imgSelect"
import { Controller, useForm } from "react-hook-form"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"
  
  export function InvForm() {

    const form = useForm()
    
    return (
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Company Details</AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4">
            <div className="flex gap-3 justify-between">
                <div className="flex flex-col gap-2 w-fit h-fit">
                    <span className="flex items-center gap-2 text-xs leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 py-2 px-1">
                      Company Logo
                    </span>
                    <ImgSelect title="Select Image From Assets" type="logo"/>
                </div>
                <div className="flex flex-col gap-2 w-fit h-fit">
                    <span className="flex items-center gap-2 text-xs leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 py-2 px-1">
                      Company Signature
                    </span>
                    <ImgSelect title="Select Image From Assets" type="signature"/>
                </div>
            </div>
            <form id="form-rhf-demo">
              <FieldGroup>
                <Controller name="company name" control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="text-xs capitalize px-1">
                        Company Name
                      </FieldLabel>
                      <Input {...field} placeholder="Invoicely Ltd" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive -mt-1"/>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
                <Controller name="company address" control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-description" className="text-xs capitalize px-1 -mt-2">
                        Company Address
                      </FieldLabel>
                      <InputGroup className="-mt-1">
                        <InputGroupTextarea {...field} placeholder="123 Main St , Anytown , USA" rows={6} className="border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none h-20" 
                        aria-invalid={fieldState.invalid}/>
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.value?.length ? field.value.length : "0"} / 100 &nbsp;characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
              </FieldGroup>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  

