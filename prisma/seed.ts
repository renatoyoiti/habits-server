import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const sleepdHabitId = '981df7d9-a800-4038-97b6-7f22c0daa023'

async function main() {
  await prisma.habitWeekDays.deleteMany()
  await prisma.dayHabit.deleteMany()
  await prisma.habit.deleteMany()
  await prisma.day.deleteMany()

  /* Create habits */
  await Promise.all([
    prisma.habit.create({
      data: {
        title: "Beber 4L de água",
        created_at: new Date('2023-01-01T00:00:00.000z'),
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
            { week_day: 7 }
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        title: "Academia",
        created_at: new Date('2023-01-01T18:00:00.000z'),
        weekDays: {
          create: [
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 }
          ]
        }
      }
    }),

    prisma.habit.create({
      data: {
        id: "981df7d9-a800-4038-97b6-7f22c0daa023",
        title: "Dormir 7 horas",
        created_at: new Date('2023-01-01T23:00:00.000z'),
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
            { week_day: 6 },
            { week_day: 7 }
          ]
        }
      }
    })

  ])

  /* Create habits completion */
  await Promise.all([
    prisma.day.create({
      data: {
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create: {
            habit_id: sleepdHabitId
          }
        }
      }
    })
  ])

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })