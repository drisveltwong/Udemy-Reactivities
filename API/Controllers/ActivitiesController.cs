using System.ComponentModel.DataAnnotations;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet] // /api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] // /api/activities/iddd
        public async Task<ActionResult<Activity>> GetActivities(Guid id)
        {
            return await Mediator.Send(new Details.Query { id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            await Mediator.Send(new Create.Command { activity = activity });

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;

            await Mediator.Send(new Edit.Command { activity = activity });

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            await Mediator.Send(new Delete.Command { id = id });

            return Ok();
        }
    }
}