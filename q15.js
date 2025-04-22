//Aggregation Framework
db.employees.aggregate([
    { $match: { daprtment: "IT" } },
    { $project: { _id: 0, name: 1, salary: 1 } },
  ]);
  
  db.employees.aggregate([{ $project: { _id: 0, name: 1, salary: 1 } }]);
  
  db.employees.aggregate([
    { $addFields: { Bonus: { $multiply: ["$salary", 2] } } },
  ]);
  
  db.employees.aggregate([
    { $match: { daprtment: "IT" } },
    { $addFields: { Bonus: { $multiply: ["$salary", 2] } } },
    { $project: { _id: 0, name: 1, salary: 1, Bonus: 1 } },
  ]);
  
  db.employees.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
          //cond:[condition,if-true,if-false]
          $cond: [
            {
              $gte: ["$salary", 1500],
            },
            "Grade A",
            "Grade B",
          ],
        },
      },
    },
  ]);
  
  db.employees.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
          //cond:[if,then,else]
          $cond: {
            if: { $gte: ["$salary", 1500] },
            then: "Grade A",
            else: "Grade B",
          },
        },
      },
    },
  ]);
  
  db.employees.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        salary: 1,
        grade: {
          $switch: {
            branches: [
              { case: { $gte: ["$salary", 1500] }, then: "Grade A" },
              { case: { $lt: ["$salary", 1500] }, then: "Grade B" },
            ],
            default: "Unknown",
          },
        },
      },
    },
  ]);
  
  
  
  db.employees.aggregate([
      {
        $project: {
          _id: 0,
          name: 1,
          salary: 1,
          grade: {
            $switch: {
              branches: [
                { case: { $gte: ["$salary", 1500] }, then: "Grade A" },
                { case: { $eq: ["$salary", 1500] }, then: "Grade B" },
              ],
              default: "Unknown",
            },
          },
        },
      },
    ]);

    db.employees.aggregate([
        {
            $addFields: {
                dept: {
                    $cond: {if: {$eq:["$daprtment","IT"]},then: "Information Technology",else: "Other"},
                    $cond : {if: {$eq: ["$daprtment","HR"]},then :"Human Resources",else: "Other"},
                },
            },
        },
        {$project: {_id:0, name:1, salary:1, dept:1}}
    ])


    db.employees.aggregate([
        {
          $addFields: {
            dept: {
              $switch: {
                branches: [
                  { case: { $eq: ["$daprtment", "IT"] }, then: "Information Technology" },
                  {case: {$eq: ["$daprtment","HR"]}, then : "Human Resources"}
                ],
                default: "unknown"
              }
            }
          }
        },
        {
          $project: { _id: 0, name: 1, salary: 1, dept: 1 }
        }
      ]);
      