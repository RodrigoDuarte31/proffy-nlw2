const database = require('./db')
const createProffy = require('./createProffy')

database.then(async(db) => {
    // Inserindo dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "123456789",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."        
    }

    classValue = {
        subject: 1,
        cost: "20",
        // proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // class id virá pelo banco de dados, após o cadastro da class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // Todos os proffys
    const slectedPRoffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    /* União de tabelas para consultar as classes de um
    determinado professor, trazendo junto os dados dele */
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    // console.log(selectedClassesAndProffys)

    /* O horário solicitado por um aluno precisa ser, obrigatoriamente,
    maior ou igual ao time_from e menor que o time_to */
    const selecteClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    console.log(selecteClassesSchedules)

})