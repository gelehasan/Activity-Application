using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.ActivitiesProvider
{
    public class CreateActivity
    {
     
     public class Command: IRequest{

        public Activity Activity { get; set; }
     }

     public class Handler: IRequestHandler<Command>{
        
        private readonly DataContext _context;
        public Handler(DataContext context){
            _context = context;   
        }


        public async Task<Unit> Handle (Command request, CancellationToken Token){

            _context.Activities.Add(request.Activity);

           await _context.SaveChangesAsync();
            
            return Unit.Value;
        }
     }

    }
}