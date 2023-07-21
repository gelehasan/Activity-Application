
using Application.ActivitiesProvider;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : ApiController
    {  
     //   private readonly DataContext _context;
     
    
     /*  public ActivitiesController(DataContext context){
            _context = context;
        }*/
      


   //For someone to reach this end point they will have 
   // to specify this url
    [HttpGet] //ap/activities
    public async Task<ActionResult<List<Activity>>> GetActivities (){

        //Use the List we get from Application
        return await Mediator.Send(new getList.Query() );
    } 


    [HttpGet("{id}")]

    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {

        return  await Mediator.Send(new getSingleActivity.Query{Id= id});

    }
    

}}