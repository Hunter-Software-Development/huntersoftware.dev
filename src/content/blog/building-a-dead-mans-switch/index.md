---
title: Building a Dead Man's Switch
date: 2022-11-08T03:35:52.640Z
description: Building a Dead Man's Switch
---
I built the prototype for Dead Man's Switch over several off-and-on months using a smorgasbord of technologies that I wanted to learn or improve in.  

The project started with a **[React](https://reactjs.org/)** front-end.  As I was already reasonably familiar with React, I decided to spice it up by using **[Tailwind](https://tailwindcss.com/)** (which I hadn't ever used before) as my CSS framework.  I liked using Tailwind a lot, but as someone who doesn't like to make a ton of decisions in the front-end, I found it at times to be somewhat tedious - especially when compared to something like Bootstrap (which I've used a lot of in the past).

For the back-end I decided to use **[NestJS](https://nestjs.com/)** - it was another project that I hadn't used before but had heard good things about.  I was (and still am) interested in moving towards a more service-oriented architecture after working exclusively in monoliths and Nest seemed to be the most feature-rich Node framework that was built with services in mind.  I really enjoyed using Nest and despite some idiosyncracies (namely how the usage of decorators) - I think I'll continue using it for projects in the future.  

I decided to use** [GraphQL](https://graphql.org/)** instead of REST in part because Nest supported it so well - but also because it was a service that I had never set up from the provider side.  It was definitely overkill for this simple project - and there's just some simplicity to REST that I love - but I do intend on continuing to use it in the future when I can.

The one design decision I made for simplicity's sake was to use a **[MongoDB](https://www.mongodb.com/)**.  

I initially was building this project with separate front-end and back-end repositories, but at a certain point that became tedious, so after doing some reading about how to best handle this problem, I was pleasantly surprised that Nest had built-in **[Monorepo](https://docs.nestjs.com/cli/monorepo)** capabilities.  While the way that I brought in my front-end code to my codebase wasn't perfect, Nest made it really easy and handled a lot of the lifting for me.

Finally, I wanted to use this project to extend some of my dev-ops knowledge, so I used **[Docker](https://www.docker.com/)** to containerize the project and ultimately used **[Kubernetes](https://kubernetes.io/)** (with **[Helm](https://helm.sh/)**'s help) to orchestrate.  I ended up using **[Okteto](https://www.okteto.com/)** for PR builds (and because they have a free tier) and am super happy with their service.

Thank you for making it this far.  You can view the project [here](https://dms.huntersoftware.dev).