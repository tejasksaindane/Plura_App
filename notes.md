# NOTE: Imp note whenever you are doing anything with stripe you have to keep your webhook open.

# Webhook is needed to sync your database with Stripe.

# useSearchParams ---> hook 
# useSearchParams is a Client Component hook that lets you read the current URL's query string.
# useSearchParams returns a read-only version of the URLSearchParams interface.


"use client"
 import {useSearchParams} from "next/navigation"

 export default function SearchBar(){
    const searchParams = useSearchParams()

    const search = searchParams.get('Search');

    // URL = '/dashboard?search=my-project'
    // 'search' -> 'my-project'

    return <>Search: {search}</>
 }

 # Parameters
  const searchParams = useSearchParams()

 # useSearchParams does not take any parameters.

#------------------------------------------------------------------------------------------------------------------#

# useParams ----> hook
# useParams is a Client Component hook that lets you read a route's dynamic params filled in the current URL.

'use client' 
import {useParams} from "next/navigation"

export default function ExampleClientComponent(){
    const params = useParams<{tag:string; item:string}>()

    //Route -> /shop/[tag]/[item]/
    //URL -> /shop/shoes/nike-air-97
    //'params' -> {tag:'shoes' , item:'nike-air-max-97'}

    console.log(params)
    return <></>
}

# useParams does not take any parameters

# Returns --> useParams returns an object containing the current route's filled in dynamic parameters.

- Each property in the object is an active dynamic segment.
- The properties name is the segment's name, and the properties value is what the segment is filled with.
- The properties value will either be a string or array of string's depending on type of dynamic segment.
- If the route contains no dynamic parameters, useParams returns an empty object.
